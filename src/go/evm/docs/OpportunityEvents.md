# OpportunityEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**OpportunityBlockInfo** | Pointer to [**OpportunityBlockInfoType**](OpportunityBlockInfoType.md) |  | [optional] 
**OpportunityEventDetails** | Pointer to [**[]OpportunityEventInfoType**](OpportunityEventInfoType.md) | Catering Event information getting added for Opportunity Block. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewOpportunityEvents

`func NewOpportunityEvents() *OpportunityEvents`

NewOpportunityEvents instantiates a new OpportunityEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpportunityEventsWithDefaults

`func NewOpportunityEventsWithDefaults() *OpportunityEvents`

NewOpportunityEventsWithDefaults instantiates a new OpportunityEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *OpportunityEvents) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OpportunityEvents) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OpportunityEvents) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OpportunityEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOpportunityBlockInfo

`func (o *OpportunityEvents) GetOpportunityBlockInfo() OpportunityBlockInfoType`

GetOpportunityBlockInfo returns the OpportunityBlockInfo field if non-nil, zero value otherwise.

### GetOpportunityBlockInfoOk

`func (o *OpportunityEvents) GetOpportunityBlockInfoOk() (*OpportunityBlockInfoType, bool)`

GetOpportunityBlockInfoOk returns a tuple with the OpportunityBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpportunityBlockInfo

`func (o *OpportunityEvents) SetOpportunityBlockInfo(v OpportunityBlockInfoType)`

SetOpportunityBlockInfo sets OpportunityBlockInfo field to given value.

### HasOpportunityBlockInfo

`func (o *OpportunityEvents) HasOpportunityBlockInfo() bool`

HasOpportunityBlockInfo returns a boolean if a field has been set.

### GetOpportunityEventDetails

`func (o *OpportunityEvents) GetOpportunityEventDetails() []OpportunityEventInfoType`

GetOpportunityEventDetails returns the OpportunityEventDetails field if non-nil, zero value otherwise.

### GetOpportunityEventDetailsOk

`func (o *OpportunityEvents) GetOpportunityEventDetailsOk() (*[]OpportunityEventInfoType, bool)`

GetOpportunityEventDetailsOk returns a tuple with the OpportunityEventDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpportunityEventDetails

`func (o *OpportunityEvents) SetOpportunityEventDetails(v []OpportunityEventInfoType)`

SetOpportunityEventDetails sets OpportunityEventDetails field to given value.

### HasOpportunityEventDetails

`func (o *OpportunityEvents) HasOpportunityEventDetails() bool`

HasOpportunityEventDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *OpportunityEvents) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OpportunityEvents) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OpportunityEvents) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OpportunityEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


