# ItemClassType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Code** | Pointer to **string** | Code of the Item Class. | [optional] 
**Description** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**Type** | Pointer to [**ItemClassTypeType**](ItemClassTypeType.md) |  | [optional] 
**ClassId** | Pointer to **float32** | ClassID of the Item Class. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence of Item Class. | [optional] 
**EventTypes** | Pointer to **[]string** |  | [optional] 
**Departments** | Pointer to **[]string** |  | [optional] 
**Discountable** | Pointer to **bool** | Indicates whether the Item Class is discountable or not. | [optional] 
**WebBookable** | Pointer to **bool** | Indicates whether the Item Class is BookableViaWebsite or not. | [optional] 
**OverrideWarnings** | Pointer to **bool** | Indicates whether the all items to be updated when there are warnings. | [optional] 
**DiscountOverrideWarnings** | Pointer to **bool** | Indicates whether the all items to be updated when there are warnings for discountable. | [optional] 

## Methods

### NewItemClassType

`func NewItemClassType() *ItemClassType`

NewItemClassType instantiates a new ItemClassType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemClassTypeWithDefaults

`func NewItemClassTypeWithDefaults() *ItemClassType`

NewItemClassTypeWithDefaults instantiates a new ItemClassType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ItemClassType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ItemClassType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ItemClassType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ItemClassType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *ItemClassType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ItemClassType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ItemClassType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ItemClassType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ItemClassType) GetDescription() TranslationTextType200`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ItemClassType) GetDescriptionOk() (*TranslationTextType200, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ItemClassType) SetDescription(v TranslationTextType200)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ItemClassType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *ItemClassType) GetType() ItemClassTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ItemClassType) GetTypeOk() (*ItemClassTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ItemClassType) SetType(v ItemClassTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *ItemClassType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetClassId

`func (o *ItemClassType) GetClassId() float32`

GetClassId returns the ClassId field if non-nil, zero value otherwise.

### GetClassIdOk

`func (o *ItemClassType) GetClassIdOk() (*float32, bool)`

GetClassIdOk returns a tuple with the ClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassId

`func (o *ItemClassType) SetClassId(v float32)`

SetClassId sets ClassId field to given value.

### HasClassId

`func (o *ItemClassType) HasClassId() bool`

HasClassId returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *ItemClassType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *ItemClassType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *ItemClassType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *ItemClassType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetEventTypes

`func (o *ItemClassType) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *ItemClassType) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *ItemClassType) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *ItemClassType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetDepartments

`func (o *ItemClassType) GetDepartments() []string`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *ItemClassType) GetDepartmentsOk() (*[]string, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *ItemClassType) SetDepartments(v []string)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *ItemClassType) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetDiscountable

`func (o *ItemClassType) GetDiscountable() bool`

GetDiscountable returns the Discountable field if non-nil, zero value otherwise.

### GetDiscountableOk

`func (o *ItemClassType) GetDiscountableOk() (*bool, bool)`

GetDiscountableOk returns a tuple with the Discountable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountable

`func (o *ItemClassType) SetDiscountable(v bool)`

SetDiscountable sets Discountable field to given value.

### HasDiscountable

`func (o *ItemClassType) HasDiscountable() bool`

HasDiscountable returns a boolean if a field has been set.

### GetWebBookable

`func (o *ItemClassType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *ItemClassType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *ItemClassType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *ItemClassType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetOverrideWarnings

`func (o *ItemClassType) GetOverrideWarnings() bool`

GetOverrideWarnings returns the OverrideWarnings field if non-nil, zero value otherwise.

### GetOverrideWarningsOk

`func (o *ItemClassType) GetOverrideWarningsOk() (*bool, bool)`

GetOverrideWarningsOk returns a tuple with the OverrideWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideWarnings

`func (o *ItemClassType) SetOverrideWarnings(v bool)`

SetOverrideWarnings sets OverrideWarnings field to given value.

### HasOverrideWarnings

`func (o *ItemClassType) HasOverrideWarnings() bool`

HasOverrideWarnings returns a boolean if a field has been set.

### GetDiscountOverrideWarnings

`func (o *ItemClassType) GetDiscountOverrideWarnings() bool`

GetDiscountOverrideWarnings returns the DiscountOverrideWarnings field if non-nil, zero value otherwise.

### GetDiscountOverrideWarningsOk

`func (o *ItemClassType) GetDiscountOverrideWarningsOk() (*bool, bool)`

GetDiscountOverrideWarningsOk returns a tuple with the DiscountOverrideWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountOverrideWarnings

`func (o *ItemClassType) SetDiscountOverrideWarnings(v bool)`

SetDiscountOverrideWarnings sets DiscountOverrideWarnings field to given value.

### HasDiscountOverrideWarnings

`func (o *ItemClassType) HasDiscountOverrideWarnings() bool`

HasDiscountOverrideWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


