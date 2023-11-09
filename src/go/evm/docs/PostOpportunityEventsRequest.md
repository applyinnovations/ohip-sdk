# PostOpportunityEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**OpportunityBlockInfo** | Pointer to [**OpportunityBlockInfoType**](OpportunityBlockInfoType.md) |  | [optional] 
**OpportunityEventDetails** | Pointer to [**[]OpportunityEventInfoType**](OpportunityEventInfoType.md) | Catering Event information getting added for Opportunity Block. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostOpportunityEventsRequest

`func NewPostOpportunityEventsRequest() *PostOpportunityEventsRequest`

NewPostOpportunityEventsRequest instantiates a new PostOpportunityEventsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostOpportunityEventsRequestWithDefaults

`func NewPostOpportunityEventsRequestWithDefaults() *PostOpportunityEventsRequest`

NewPostOpportunityEventsRequestWithDefaults instantiates a new PostOpportunityEventsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostOpportunityEventsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostOpportunityEventsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostOpportunityEventsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostOpportunityEventsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOpportunityBlockInfo

`func (o *PostOpportunityEventsRequest) GetOpportunityBlockInfo() OpportunityBlockInfoType`

GetOpportunityBlockInfo returns the OpportunityBlockInfo field if non-nil, zero value otherwise.

### GetOpportunityBlockInfoOk

`func (o *PostOpportunityEventsRequest) GetOpportunityBlockInfoOk() (*OpportunityBlockInfoType, bool)`

GetOpportunityBlockInfoOk returns a tuple with the OpportunityBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpportunityBlockInfo

`func (o *PostOpportunityEventsRequest) SetOpportunityBlockInfo(v OpportunityBlockInfoType)`

SetOpportunityBlockInfo sets OpportunityBlockInfo field to given value.

### HasOpportunityBlockInfo

`func (o *PostOpportunityEventsRequest) HasOpportunityBlockInfo() bool`

HasOpportunityBlockInfo returns a boolean if a field has been set.

### GetOpportunityEventDetails

`func (o *PostOpportunityEventsRequest) GetOpportunityEventDetails() []OpportunityEventInfoType`

GetOpportunityEventDetails returns the OpportunityEventDetails field if non-nil, zero value otherwise.

### GetOpportunityEventDetailsOk

`func (o *PostOpportunityEventsRequest) GetOpportunityEventDetailsOk() (*[]OpportunityEventInfoType, bool)`

GetOpportunityEventDetailsOk returns a tuple with the OpportunityEventDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpportunityEventDetails

`func (o *PostOpportunityEventsRequest) SetOpportunityEventDetails(v []OpportunityEventInfoType)`

SetOpportunityEventDetails sets OpportunityEventDetails field to given value.

### HasOpportunityEventDetails

`func (o *PostOpportunityEventsRequest) HasOpportunityEventDetails() bool`

HasOpportunityEventDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *PostOpportunityEventsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostOpportunityEventsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostOpportunityEventsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostOpportunityEventsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


