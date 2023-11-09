# PutMealTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MealTypes** | Pointer to [**MealTypesType**](MealTypesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutMealTypesRequest

`func NewPutMealTypesRequest() *PutMealTypesRequest`

NewPutMealTypesRequest instantiates a new PutMealTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutMealTypesRequestWithDefaults

`func NewPutMealTypesRequestWithDefaults() *PutMealTypesRequest`

NewPutMealTypesRequestWithDefaults instantiates a new PutMealTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutMealTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutMealTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutMealTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutMealTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMealTypes

`func (o *PutMealTypesRequest) GetMealTypes() MealTypesType`

GetMealTypes returns the MealTypes field if non-nil, zero value otherwise.

### GetMealTypesOk

`func (o *PutMealTypesRequest) GetMealTypesOk() (*MealTypesType, bool)`

GetMealTypesOk returns a tuple with the MealTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealTypes

`func (o *PutMealTypesRequest) SetMealTypes(v MealTypesType)`

SetMealTypes sets MealTypes field to given value.

### HasMealTypes

`func (o *PutMealTypesRequest) HasMealTypes() bool`

HasMealTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutMealTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutMealTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutMealTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutMealTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


