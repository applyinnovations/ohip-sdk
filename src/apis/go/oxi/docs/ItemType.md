# ItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IDs** | Pointer to [**[]IdType**](IdType.md) |  | [optional] 
**Flexfields** | Pointer to [**[]ParameterType**](ParameterType.md) | Collection of generic Name-Value-Pair parameters. | [optional] 
**Code** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Sequence** | Pointer to **string** |  | [optional] 
**ParentCode** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**Color** | Pointer to **string** |  | [optional] 
**ShortDescription** | Pointer to **string** |  | [optional] 
**ImageURL** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewItemType

`func NewItemType() *ItemType`

NewItemType instantiates a new ItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemTypeWithDefaults

`func NewItemTypeWithDefaults() *ItemType`

NewItemTypeWithDefaults instantiates a new ItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIDs

`func (o *ItemType) GetIDs() []IdType`

GetIDs returns the IDs field if non-nil, zero value otherwise.

### GetIDsOk

`func (o *ItemType) GetIDsOk() (*[]IdType, bool)`

GetIDsOk returns a tuple with the IDs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIDs

`func (o *ItemType) SetIDs(v []IdType)`

SetIDs sets IDs field to given value.

### HasIDs

`func (o *ItemType) HasIDs() bool`

HasIDs returns a boolean if a field has been set.

### GetFlexfields

`func (o *ItemType) GetFlexfields() []ParameterType`

GetFlexfields returns the Flexfields field if non-nil, zero value otherwise.

### GetFlexfieldsOk

`func (o *ItemType) GetFlexfieldsOk() (*[]ParameterType, bool)`

GetFlexfieldsOk returns a tuple with the Flexfields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexfields

`func (o *ItemType) SetFlexfields(v []ParameterType)`

SetFlexfields sets Flexfields field to given value.

### HasFlexfields

`func (o *ItemType) HasFlexfields() bool`

HasFlexfields returns a boolean if a field has been set.

### GetCode

`func (o *ItemType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ItemType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ItemType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ItemType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetName

`func (o *ItemType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ItemType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ItemType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ItemType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ItemType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ItemType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ItemType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ItemType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *ItemType) GetSequence() string`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ItemType) GetSequenceOk() (*string, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ItemType) SetSequence(v string)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ItemType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetParentCode

`func (o *ItemType) GetParentCode() string`

GetParentCode returns the ParentCode field if non-nil, zero value otherwise.

### GetParentCodeOk

`func (o *ItemType) GetParentCodeOk() (*string, bool)`

GetParentCodeOk returns a tuple with the ParentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentCode

`func (o *ItemType) SetParentCode(v string)`

SetParentCode sets ParentCode field to given value.

### HasParentCode

`func (o *ItemType) HasParentCode() bool`

HasParentCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetColor

`func (o *ItemType) GetColor() string`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *ItemType) GetColorOk() (*string, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *ItemType) SetColor(v string)`

SetColor sets Color field to given value.

### HasColor

`func (o *ItemType) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetShortDescription

`func (o *ItemType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *ItemType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *ItemType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *ItemType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetImageURL

`func (o *ItemType) GetImageURL() string`

GetImageURL returns the ImageURL field if non-nil, zero value otherwise.

### GetImageURLOk

`func (o *ItemType) GetImageURLOk() (*string, bool)`

GetImageURLOk returns a tuple with the ImageURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageURL

`func (o *ItemType) SetImageURL(v string)`

SetImageURL sets ImageURL field to given value.

### HasImageURL

`func (o *ItemType) HasImageURL() bool`

HasImageURL returns a boolean if a field has been set.

### GetActive

`func (o *ItemType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ItemType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ItemType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ItemType) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


