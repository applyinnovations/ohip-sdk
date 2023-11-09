# EventResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventResourceDetails** | Pointer to [**EventResourceDetailType**](EventResourceDetailType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewEventResource

`func NewEventResource() *EventResource`

NewEventResource instantiates a new EventResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventResourceWithDefaults

`func NewEventResourceWithDefaults() *EventResource`

NewEventResourceWithDefaults instantiates a new EventResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventResourceDetails

`func (o *EventResource) GetEventResourceDetails() EventResourceDetailType`

GetEventResourceDetails returns the EventResourceDetails field if non-nil, zero value otherwise.

### GetEventResourceDetailsOk

`func (o *EventResource) GetEventResourceDetailsOk() (*EventResourceDetailType, bool)`

GetEventResourceDetailsOk returns a tuple with the EventResourceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventResourceDetails

`func (o *EventResource) SetEventResourceDetails(v EventResourceDetailType)`

SetEventResourceDetails sets EventResourceDetails field to given value.

### HasEventResourceDetails

`func (o *EventResource) HasEventResourceDetails() bool`

HasEventResourceDetails returns a boolean if a field has been set.

### GetLinks

`func (o *EventResource) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EventResource) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EventResource) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EventResource) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EventResource) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventResource) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventResource) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventResource) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


