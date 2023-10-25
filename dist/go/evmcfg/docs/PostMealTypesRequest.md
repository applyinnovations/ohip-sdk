# PostMealTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MealTypes** | Pointer to [**[]MealTypeType**](MealTypeType.md) | List of Meal Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMealTypesRequest

`func NewPostMealTypesRequest() *PostMealTypesRequest`

NewPostMealTypesRequest instantiates a new PostMealTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMealTypesRequestWithDefaults

`func NewPostMealTypesRequestWithDefaults() *PostMealTypesRequest`

NewPostMealTypesRequestWithDefaults instantiates a new PostMealTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMealTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMealTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMealTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMealTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMealTypes

`func (o *PostMealTypesRequest) GetMealTypes() []MealTypeType`

GetMealTypes returns the MealTypes field if non-nil, zero value otherwise.

### GetMealTypesOk

`func (o *PostMealTypesRequest) GetMealTypesOk() (*[]MealTypeType, bool)`

GetMealTypesOk returns a tuple with the MealTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealTypes

`func (o *PostMealTypesRequest) SetMealTypes(v []MealTypeType)`

SetMealTypes sets MealTypes field to given value.

### HasMealTypes

`func (o *PostMealTypesRequest) HasMealTypes() bool`

HasMealTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMealTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMealTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMealTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMealTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


