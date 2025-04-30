# NegotiatedType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NegotiatedInfoList** | Pointer to [**[]NegotiatedInfoType**](NegotiatedInfoType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the negotiated rate. | [optional] 
**RateCode** | Pointer to **string** | Rate plan code for the negotiated rate. | [optional] 

## Methods

### NewNegotiatedType

`func NewNegotiatedType() *NegotiatedType`

NewNegotiatedType instantiates a new NegotiatedType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNegotiatedTypeWithDefaults

`func NewNegotiatedTypeWithDefaults() *NegotiatedType`

NewNegotiatedTypeWithDefaults instantiates a new NegotiatedType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNegotiatedInfoList

`func (o *NegotiatedType) GetNegotiatedInfoList() []NegotiatedInfoType`

GetNegotiatedInfoList returns the NegotiatedInfoList field if non-nil, zero value otherwise.

### GetNegotiatedInfoListOk

`func (o *NegotiatedType) GetNegotiatedInfoListOk() (*[]NegotiatedInfoType, bool)`

GetNegotiatedInfoListOk returns a tuple with the NegotiatedInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedInfoList

`func (o *NegotiatedType) SetNegotiatedInfoList(v []NegotiatedInfoType)`

SetNegotiatedInfoList sets NegotiatedInfoList field to given value.

### HasNegotiatedInfoList

`func (o *NegotiatedType) HasNegotiatedInfoList() bool`

HasNegotiatedInfoList returns a boolean if a field has been set.

### GetHotelId

`func (o *NegotiatedType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *NegotiatedType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *NegotiatedType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *NegotiatedType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRateCode

`func (o *NegotiatedType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *NegotiatedType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *NegotiatedType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *NegotiatedType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


