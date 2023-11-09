# ChangeEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventDetails** | Pointer to [**EventsInfoType**](EventsInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeEventsRequest

`func NewChangeEventsRequest() *ChangeEventsRequest`

NewChangeEventsRequest instantiates a new ChangeEventsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeEventsRequestWithDefaults

`func NewChangeEventsRequestWithDefaults() *ChangeEventsRequest`

NewChangeEventsRequestWithDefaults instantiates a new ChangeEventsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventDetails

`func (o *ChangeEventsRequest) GetEventDetails() EventsInfoType`

GetEventDetails returns the EventDetails field if non-nil, zero value otherwise.

### GetEventDetailsOk

`func (o *ChangeEventsRequest) GetEventDetailsOk() (*EventsInfoType, bool)`

GetEventDetailsOk returns a tuple with the EventDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetails

`func (o *ChangeEventsRequest) SetEventDetails(v EventsInfoType)`

SetEventDetails sets EventDetails field to given value.

### HasEventDetails

`func (o *ChangeEventsRequest) HasEventDetails() bool`

HasEventDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeEventsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeEventsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeEventsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeEventsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeEventsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeEventsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeEventsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeEventsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


