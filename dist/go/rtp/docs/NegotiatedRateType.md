# NegotiatedRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**NegotiatedProfile** | Pointer to [**[]NegotiatedProfileType**](NegotiatedProfileType.md) | Collection of Negotiated profiles. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate plan code. | [optional] 

## Methods

### NewNegotiatedRateType

`func NewNegotiatedRateType() *NegotiatedRateType`

NewNegotiatedRateType instantiates a new NegotiatedRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNegotiatedRateTypeWithDefaults

`func NewNegotiatedRateTypeWithDefaults() *NegotiatedRateType`

NewNegotiatedRateTypeWithDefaults instantiates a new NegotiatedRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *NegotiatedRateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *NegotiatedRateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *NegotiatedRateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *NegotiatedRateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNegotiatedProfile

`func (o *NegotiatedRateType) GetNegotiatedProfile() []NegotiatedProfileType`

GetNegotiatedProfile returns the NegotiatedProfile field if non-nil, zero value otherwise.

### GetNegotiatedProfileOk

`func (o *NegotiatedRateType) GetNegotiatedProfileOk() (*[]NegotiatedProfileType, bool)`

GetNegotiatedProfileOk returns a tuple with the NegotiatedProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedProfile

`func (o *NegotiatedRateType) SetNegotiatedProfile(v []NegotiatedProfileType)`

SetNegotiatedProfile sets NegotiatedProfile field to given value.

### HasNegotiatedProfile

`func (o *NegotiatedRateType) HasNegotiatedProfile() bool`

HasNegotiatedProfile returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *NegotiatedRateType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *NegotiatedRateType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *NegotiatedRateType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *NegotiatedRateType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


