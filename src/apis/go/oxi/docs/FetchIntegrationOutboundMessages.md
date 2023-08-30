# FetchIntegrationOutboundMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Messages** | Pointer to [**[]IntegrationOutboundMessageType**](IntegrationOutboundMessageType.md) | List of integration outbound messages | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchIntegrationOutboundMessages

`func NewFetchIntegrationOutboundMessages() *FetchIntegrationOutboundMessages`

NewFetchIntegrationOutboundMessages instantiates a new FetchIntegrationOutboundMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchIntegrationOutboundMessagesWithDefaults

`func NewFetchIntegrationOutboundMessagesWithDefaults() *FetchIntegrationOutboundMessages`

NewFetchIntegrationOutboundMessagesWithDefaults instantiates a new FetchIntegrationOutboundMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessages

`func (o *FetchIntegrationOutboundMessages) GetMessages() []IntegrationOutboundMessageType`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *FetchIntegrationOutboundMessages) GetMessagesOk() (*[]IntegrationOutboundMessageType, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *FetchIntegrationOutboundMessages) SetMessages(v []IntegrationOutboundMessageType)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *FetchIntegrationOutboundMessages) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetTotalPages

`func (o *FetchIntegrationOutboundMessages) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FetchIntegrationOutboundMessages) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FetchIntegrationOutboundMessages) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FetchIntegrationOutboundMessages) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *FetchIntegrationOutboundMessages) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *FetchIntegrationOutboundMessages) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *FetchIntegrationOutboundMessages) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *FetchIntegrationOutboundMessages) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *FetchIntegrationOutboundMessages) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *FetchIntegrationOutboundMessages) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *FetchIntegrationOutboundMessages) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *FetchIntegrationOutboundMessages) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *FetchIntegrationOutboundMessages) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *FetchIntegrationOutboundMessages) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *FetchIntegrationOutboundMessages) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *FetchIntegrationOutboundMessages) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *FetchIntegrationOutboundMessages) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *FetchIntegrationOutboundMessages) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *FetchIntegrationOutboundMessages) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *FetchIntegrationOutboundMessages) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *FetchIntegrationOutboundMessages) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchIntegrationOutboundMessages) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchIntegrationOutboundMessages) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchIntegrationOutboundMessages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchIntegrationOutboundMessages) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchIntegrationOutboundMessages) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchIntegrationOutboundMessages) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchIntegrationOutboundMessages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


