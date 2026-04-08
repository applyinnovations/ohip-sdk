# CutoffCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CutoffCodeDetails** | Pointer to [**[]CutoffCodeDetailType**](CutoffCodeDetailType.md) | Detail information of the Cutoff Code. | [optional] 
**HotelCode** | Pointer to **string** | Hotel Code to which the cutoff Code belongs to. | [optional] 
**Code** | Pointer to **string** | Unique Cutoff Schedule Code. | [optional] 
**Id** | Pointer to **int32** | Unique Cutoff Schedule Code Id | [optional] 
**Description** | Pointer to **string** | Description of the Cutoff Schedule Code. | [optional] 
**CutoffCodeStartDate** | Pointer to **string** | Cutoff Schedule Code Start Date. | [optional] 
**CutoffCodeEndDate** | Pointer to **string** | Cutoff Schedule Code End Date. | [optional] 
**DefaultDays** | Pointer to **int32** | Cutoff Schedule Code Default Days. This value will be used if no pre defined schedule exist for a date or room type. | [optional] 

## Methods

### NewCutoffCodeType

`func NewCutoffCodeType() *CutoffCodeType`

NewCutoffCodeType instantiates a new CutoffCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCutoffCodeTypeWithDefaults

`func NewCutoffCodeTypeWithDefaults() *CutoffCodeType`

NewCutoffCodeTypeWithDefaults instantiates a new CutoffCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCutoffCodeDetails

`func (o *CutoffCodeType) GetCutoffCodeDetails() []CutoffCodeDetailType`

GetCutoffCodeDetails returns the CutoffCodeDetails field if non-nil, zero value otherwise.

### GetCutoffCodeDetailsOk

`func (o *CutoffCodeType) GetCutoffCodeDetailsOk() (*[]CutoffCodeDetailType, bool)`

GetCutoffCodeDetailsOk returns a tuple with the CutoffCodeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffCodeDetails

`func (o *CutoffCodeType) SetCutoffCodeDetails(v []CutoffCodeDetailType)`

SetCutoffCodeDetails sets CutoffCodeDetails field to given value.

### HasCutoffCodeDetails

`func (o *CutoffCodeType) HasCutoffCodeDetails() bool`

HasCutoffCodeDetails returns a boolean if a field has been set.

### GetHotelCode

`func (o *CutoffCodeType) GetHotelCode() string`

GetHotelCode returns the HotelCode field if non-nil, zero value otherwise.

### GetHotelCodeOk

`func (o *CutoffCodeType) GetHotelCodeOk() (*string, bool)`

GetHotelCodeOk returns a tuple with the HotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCode

`func (o *CutoffCodeType) SetHotelCode(v string)`

SetHotelCode sets HotelCode field to given value.

### HasHotelCode

`func (o *CutoffCodeType) HasHotelCode() bool`

HasHotelCode returns a boolean if a field has been set.

### GetCode

`func (o *CutoffCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CutoffCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CutoffCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CutoffCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetId

`func (o *CutoffCodeType) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CutoffCodeType) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CutoffCodeType) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *CutoffCodeType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *CutoffCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CutoffCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CutoffCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CutoffCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCutoffCodeStartDate

`func (o *CutoffCodeType) GetCutoffCodeStartDate() string`

GetCutoffCodeStartDate returns the CutoffCodeStartDate field if non-nil, zero value otherwise.

### GetCutoffCodeStartDateOk

`func (o *CutoffCodeType) GetCutoffCodeStartDateOk() (*string, bool)`

GetCutoffCodeStartDateOk returns a tuple with the CutoffCodeStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffCodeStartDate

`func (o *CutoffCodeType) SetCutoffCodeStartDate(v string)`

SetCutoffCodeStartDate sets CutoffCodeStartDate field to given value.

### HasCutoffCodeStartDate

`func (o *CutoffCodeType) HasCutoffCodeStartDate() bool`

HasCutoffCodeStartDate returns a boolean if a field has been set.

### GetCutoffCodeEndDate

`func (o *CutoffCodeType) GetCutoffCodeEndDate() string`

GetCutoffCodeEndDate returns the CutoffCodeEndDate field if non-nil, zero value otherwise.

### GetCutoffCodeEndDateOk

`func (o *CutoffCodeType) GetCutoffCodeEndDateOk() (*string, bool)`

GetCutoffCodeEndDateOk returns a tuple with the CutoffCodeEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffCodeEndDate

`func (o *CutoffCodeType) SetCutoffCodeEndDate(v string)`

SetCutoffCodeEndDate sets CutoffCodeEndDate field to given value.

### HasCutoffCodeEndDate

`func (o *CutoffCodeType) HasCutoffCodeEndDate() bool`

HasCutoffCodeEndDate returns a boolean if a field has been set.

### GetDefaultDays

`func (o *CutoffCodeType) GetDefaultDays() int32`

GetDefaultDays returns the DefaultDays field if non-nil, zero value otherwise.

### GetDefaultDaysOk

`func (o *CutoffCodeType) GetDefaultDaysOk() (*int32, bool)`

GetDefaultDaysOk returns a tuple with the DefaultDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDays

`func (o *CutoffCodeType) SetDefaultDays(v int32)`

SetDefaultDays sets DefaultDays field to given value.

### HasDefaultDays

`func (o *CutoffCodeType) HasDefaultDays() bool`

HasDefaultDays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


