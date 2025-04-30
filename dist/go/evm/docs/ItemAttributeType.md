# ItemAttributeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemAttributeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TranslatableName** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**SetupTime** | Pointer to **float32** | The Setup Time of the Item Attribute in minutes. | [optional] 
**SetdownTime** | Pointer to **float32** | The Setdown Time of the Item Attribute in minutes. | [optional] 
**Default** | Pointer to **bool** | If true, it&#39;s the default Attribute for the Item. | [optional] 

## Methods

### NewItemAttributeType

`func NewItemAttributeType() *ItemAttributeType`

NewItemAttributeType instantiates a new ItemAttributeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemAttributeTypeWithDefaults

`func NewItemAttributeTypeWithDefaults() *ItemAttributeType`

NewItemAttributeTypeWithDefaults instantiates a new ItemAttributeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemAttributeId

`func (o *ItemAttributeType) GetItemAttributeId() UniqueIDType`

GetItemAttributeId returns the ItemAttributeId field if non-nil, zero value otherwise.

### GetItemAttributeIdOk

`func (o *ItemAttributeType) GetItemAttributeIdOk() (*UniqueIDType, bool)`

GetItemAttributeIdOk returns a tuple with the ItemAttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemAttributeId

`func (o *ItemAttributeType) SetItemAttributeId(v UniqueIDType)`

SetItemAttributeId sets ItemAttributeId field to given value.

### HasItemAttributeId

`func (o *ItemAttributeType) HasItemAttributeId() bool`

HasItemAttributeId returns a boolean if a field has been set.

### GetTranslatableName

`func (o *ItemAttributeType) GetTranslatableName() TranslationTextType200`

GetTranslatableName returns the TranslatableName field if non-nil, zero value otherwise.

### GetTranslatableNameOk

`func (o *ItemAttributeType) GetTranslatableNameOk() (*TranslationTextType200, bool)`

GetTranslatableNameOk returns a tuple with the TranslatableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableName

`func (o *ItemAttributeType) SetTranslatableName(v TranslationTextType200)`

SetTranslatableName sets TranslatableName field to given value.

### HasTranslatableName

`func (o *ItemAttributeType) HasTranslatableName() bool`

HasTranslatableName returns a boolean if a field has been set.

### GetSetupTime

`func (o *ItemAttributeType) GetSetupTime() float32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *ItemAttributeType) GetSetupTimeOk() (*float32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *ItemAttributeType) SetSetupTime(v float32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *ItemAttributeType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetSetdownTime

`func (o *ItemAttributeType) GetSetdownTime() float32`

GetSetdownTime returns the SetdownTime field if non-nil, zero value otherwise.

### GetSetdownTimeOk

`func (o *ItemAttributeType) GetSetdownTimeOk() (*float32, bool)`

GetSetdownTimeOk returns a tuple with the SetdownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetdownTime

`func (o *ItemAttributeType) SetSetdownTime(v float32)`

SetSetdownTime sets SetdownTime field to given value.

### HasSetdownTime

`func (o *ItemAttributeType) HasSetdownTime() bool`

HasSetdownTime returns a boolean if a field has been set.

### GetDefault

`func (o *ItemAttributeType) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *ItemAttributeType) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *ItemAttributeType) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *ItemAttributeType) HasDefault() bool`

HasDefault returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


