# MealTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MealTypes** | Pointer to [**[]MealTypeType**](MealTypeType.md) | List of Meal Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMealTypesToBeChanged

`func NewMealTypesToBeChanged() *MealTypesToBeChanged`

NewMealTypesToBeChanged instantiates a new MealTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMealTypesToBeChangedWithDefaults

`func NewMealTypesToBeChangedWithDefaults() *MealTypesToBeChanged`

NewMealTypesToBeChangedWithDefaults instantiates a new MealTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMealTypes

`func (o *MealTypesToBeChanged) GetMealTypes() []MealTypeType`

GetMealTypes returns the MealTypes field if non-nil, zero value otherwise.

### GetMealTypesOk

`func (o *MealTypesToBeChanged) GetMealTypesOk() (*[]MealTypeType, bool)`

GetMealTypesOk returns a tuple with the MealTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealTypes

`func (o *MealTypesToBeChanged) SetMealTypes(v []MealTypeType)`

SetMealTypes sets MealTypes field to given value.

### HasMealTypes

`func (o *MealTypesToBeChanged) HasMealTypes() bool`

HasMealTypes returns a boolean if a field has been set.

### GetLinks

`func (o *MealTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MealTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MealTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MealTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MealTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MealTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MealTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MealTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


