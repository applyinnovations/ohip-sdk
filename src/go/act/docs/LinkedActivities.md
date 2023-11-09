# LinkedActivities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedActivityDetails** | Pointer to [**LinkedActivitiesType**](LinkedActivitiesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewLinkedActivities

`func NewLinkedActivities() *LinkedActivities`

NewLinkedActivities instantiates a new LinkedActivities object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedActivitiesWithDefaults

`func NewLinkedActivitiesWithDefaults() *LinkedActivities`

NewLinkedActivitiesWithDefaults instantiates a new LinkedActivities object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedActivityDetails

`func (o *LinkedActivities) GetLinkedActivityDetails() LinkedActivitiesType`

GetLinkedActivityDetails returns the LinkedActivityDetails field if non-nil, zero value otherwise.

### GetLinkedActivityDetailsOk

`func (o *LinkedActivities) GetLinkedActivityDetailsOk() (*LinkedActivitiesType, bool)`

GetLinkedActivityDetailsOk returns a tuple with the LinkedActivityDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedActivityDetails

`func (o *LinkedActivities) SetLinkedActivityDetails(v LinkedActivitiesType)`

SetLinkedActivityDetails sets LinkedActivityDetails field to given value.

### HasLinkedActivityDetails

`func (o *LinkedActivities) HasLinkedActivityDetails() bool`

HasLinkedActivityDetails returns a boolean if a field has been set.

### GetLinks

`func (o *LinkedActivities) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LinkedActivities) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LinkedActivities) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LinkedActivities) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LinkedActivities) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LinkedActivities) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LinkedActivities) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LinkedActivities) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


