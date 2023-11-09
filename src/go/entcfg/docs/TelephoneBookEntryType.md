# TelephoneBookEntryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** |  | [optional] 
**CategoryDescription** | Pointer to **string** |  | [optional] 
**CategorySequence** | Pointer to **int32** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Remarks** | Pointer to **string** |  | [optional] 
**Telephone** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 

## Methods

### NewTelephoneBookEntryType

`func NewTelephoneBookEntryType() *TelephoneBookEntryType`

NewTelephoneBookEntryType instantiates a new TelephoneBookEntryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTelephoneBookEntryTypeWithDefaults

`func NewTelephoneBookEntryTypeWithDefaults() *TelephoneBookEntryType`

NewTelephoneBookEntryTypeWithDefaults instantiates a new TelephoneBookEntryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *TelephoneBookEntryType) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *TelephoneBookEntryType) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *TelephoneBookEntryType) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *TelephoneBookEntryType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetCategoryDescription

`func (o *TelephoneBookEntryType) GetCategoryDescription() string`

GetCategoryDescription returns the CategoryDescription field if non-nil, zero value otherwise.

### GetCategoryDescriptionOk

`func (o *TelephoneBookEntryType) GetCategoryDescriptionOk() (*string, bool)`

GetCategoryDescriptionOk returns a tuple with the CategoryDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategoryDescription

`func (o *TelephoneBookEntryType) SetCategoryDescription(v string)`

SetCategoryDescription sets CategoryDescription field to given value.

### HasCategoryDescription

`func (o *TelephoneBookEntryType) HasCategoryDescription() bool`

HasCategoryDescription returns a boolean if a field has been set.

### GetCategorySequence

`func (o *TelephoneBookEntryType) GetCategorySequence() int32`

GetCategorySequence returns the CategorySequence field if non-nil, zero value otherwise.

### GetCategorySequenceOk

`func (o *TelephoneBookEntryType) GetCategorySequenceOk() (*int32, bool)`

GetCategorySequenceOk returns a tuple with the CategorySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategorySequence

`func (o *TelephoneBookEntryType) SetCategorySequence(v int32)`

SetCategorySequence sets CategorySequence field to given value.

### HasCategorySequence

`func (o *TelephoneBookEntryType) HasCategorySequence() bool`

HasCategorySequence returns a boolean if a field has been set.

### GetHotelId

`func (o *TelephoneBookEntryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TelephoneBookEntryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TelephoneBookEntryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TelephoneBookEntryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *TelephoneBookEntryType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TelephoneBookEntryType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TelephoneBookEntryType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *TelephoneBookEntryType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TelephoneBookEntryType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TelephoneBookEntryType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TelephoneBookEntryType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TelephoneBookEntryType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRemarks

`func (o *TelephoneBookEntryType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *TelephoneBookEntryType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *TelephoneBookEntryType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *TelephoneBookEntryType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.

### GetTelephone

`func (o *TelephoneBookEntryType) GetTelephone() string`

GetTelephone returns the Telephone field if non-nil, zero value otherwise.

### GetTelephoneOk

`func (o *TelephoneBookEntryType) GetTelephoneOk() (*string, bool)`

GetTelephoneOk returns a tuple with the Telephone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephone

`func (o *TelephoneBookEntryType) SetTelephone(v string)`

SetTelephone sets Telephone field to given value.

### HasTelephone

`func (o *TelephoneBookEntryType) HasTelephone() bool`

HasTelephone returns a boolean if a field has been set.

### GetUrl

`func (o *TelephoneBookEntryType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *TelephoneBookEntryType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *TelephoneBookEntryType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *TelephoneBookEntryType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


