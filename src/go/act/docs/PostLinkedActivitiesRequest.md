# PostLinkedActivitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedActivityDetails** | Pointer to [**LinkedActivitiesType**](LinkedActivitiesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostLinkedActivitiesRequest

`func NewPostLinkedActivitiesRequest() *PostLinkedActivitiesRequest`

NewPostLinkedActivitiesRequest instantiates a new PostLinkedActivitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostLinkedActivitiesRequestWithDefaults

`func NewPostLinkedActivitiesRequestWithDefaults() *PostLinkedActivitiesRequest`

NewPostLinkedActivitiesRequestWithDefaults instantiates a new PostLinkedActivitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedActivityDetails

`func (o *PostLinkedActivitiesRequest) GetLinkedActivityDetails() LinkedActivitiesType`

GetLinkedActivityDetails returns the LinkedActivityDetails field if non-nil, zero value otherwise.

### GetLinkedActivityDetailsOk

`func (o *PostLinkedActivitiesRequest) GetLinkedActivityDetailsOk() (*LinkedActivitiesType, bool)`

GetLinkedActivityDetailsOk returns a tuple with the LinkedActivityDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedActivityDetails

`func (o *PostLinkedActivitiesRequest) SetLinkedActivityDetails(v LinkedActivitiesType)`

SetLinkedActivityDetails sets LinkedActivityDetails field to given value.

### HasLinkedActivityDetails

`func (o *PostLinkedActivitiesRequest) HasLinkedActivityDetails() bool`

HasLinkedActivityDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PostLinkedActivitiesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostLinkedActivitiesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostLinkedActivitiesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostLinkedActivitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostLinkedActivitiesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostLinkedActivitiesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostLinkedActivitiesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostLinkedActivitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


