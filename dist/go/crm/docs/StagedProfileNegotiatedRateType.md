# StagedProfileNegotiatedRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorDescription** | Pointer to **string** | The error in negotiated rate information in a staged profile with an invalid status | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the negotiated rate. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**NegotiatedInfoList** | Pointer to [**[]NegotiatedInfoType**](NegotiatedInfoType.md) |  | [optional] 
**RateCode** | Pointer to **string** | Rate plan code for the negotiated rate. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileNegotiatedRateType

`func NewStagedProfileNegotiatedRateType() *StagedProfileNegotiatedRateType`

NewStagedProfileNegotiatedRateType instantiates a new StagedProfileNegotiatedRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileNegotiatedRateTypeWithDefaults

`func NewStagedProfileNegotiatedRateTypeWithDefaults() *StagedProfileNegotiatedRateType`

NewStagedProfileNegotiatedRateTypeWithDefaults instantiates a new StagedProfileNegotiatedRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorDescription

`func (o *StagedProfileNegotiatedRateType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileNegotiatedRateType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileNegotiatedRateType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileNegotiatedRateType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *StagedProfileNegotiatedRateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StagedProfileNegotiatedRateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StagedProfileNegotiatedRateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StagedProfileNegotiatedRateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileNegotiatedRateType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileNegotiatedRateType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileNegotiatedRateType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileNegotiatedRateType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNegotiatedInfoList

`func (o *StagedProfileNegotiatedRateType) GetNegotiatedInfoList() []NegotiatedInfoType`

GetNegotiatedInfoList returns the NegotiatedInfoList field if non-nil, zero value otherwise.

### GetNegotiatedInfoListOk

`func (o *StagedProfileNegotiatedRateType) GetNegotiatedInfoListOk() (*[]NegotiatedInfoType, bool)`

GetNegotiatedInfoListOk returns a tuple with the NegotiatedInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedInfoList

`func (o *StagedProfileNegotiatedRateType) SetNegotiatedInfoList(v []NegotiatedInfoType)`

SetNegotiatedInfoList sets NegotiatedInfoList field to given value.

### HasNegotiatedInfoList

`func (o *StagedProfileNegotiatedRateType) HasNegotiatedInfoList() bool`

HasNegotiatedInfoList returns a boolean if a field has been set.

### GetRateCode

`func (o *StagedProfileNegotiatedRateType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *StagedProfileNegotiatedRateType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *StagedProfileNegotiatedRateType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *StagedProfileNegotiatedRateType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileNegotiatedRateType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileNegotiatedRateType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileNegotiatedRateType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileNegotiatedRateType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


