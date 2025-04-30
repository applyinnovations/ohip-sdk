# FetchedHotelInterfaceFailedMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Messages** | Pointer to [**[]HotelInterfaceFailedMessageType**](HotelInterfaceFailedMessageType.md) | Collection of Hotel Interface Failed Messages. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedHotelInterfaceFailedMessages

`func NewFetchedHotelInterfaceFailedMessages() *FetchedHotelInterfaceFailedMessages`

NewFetchedHotelInterfaceFailedMessages instantiates a new FetchedHotelInterfaceFailedMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedHotelInterfaceFailedMessagesWithDefaults

`func NewFetchedHotelInterfaceFailedMessagesWithDefaults() *FetchedHotelInterfaceFailedMessages`

NewFetchedHotelInterfaceFailedMessagesWithDefaults instantiates a new FetchedHotelInterfaceFailedMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessages

`func (o *FetchedHotelInterfaceFailedMessages) GetMessages() []HotelInterfaceFailedMessageType`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *FetchedHotelInterfaceFailedMessages) GetMessagesOk() (*[]HotelInterfaceFailedMessageType, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *FetchedHotelInterfaceFailedMessages) SetMessages(v []HotelInterfaceFailedMessageType)`

SetMessages sets Messages field to given value.

### HasMessages

`func (o *FetchedHotelInterfaceFailedMessages) HasMessages() bool`

HasMessages returns a boolean if a field has been set.

### GetTotalPages

`func (o *FetchedHotelInterfaceFailedMessages) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FetchedHotelInterfaceFailedMessages) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FetchedHotelInterfaceFailedMessages) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FetchedHotelInterfaceFailedMessages) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *FetchedHotelInterfaceFailedMessages) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *FetchedHotelInterfaceFailedMessages) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *FetchedHotelInterfaceFailedMessages) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *FetchedHotelInterfaceFailedMessages) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *FetchedHotelInterfaceFailedMessages) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *FetchedHotelInterfaceFailedMessages) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *FetchedHotelInterfaceFailedMessages) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *FetchedHotelInterfaceFailedMessages) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *FetchedHotelInterfaceFailedMessages) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *FetchedHotelInterfaceFailedMessages) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *FetchedHotelInterfaceFailedMessages) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *FetchedHotelInterfaceFailedMessages) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *FetchedHotelInterfaceFailedMessages) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *FetchedHotelInterfaceFailedMessages) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *FetchedHotelInterfaceFailedMessages) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *FetchedHotelInterfaceFailedMessages) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedHotelInterfaceFailedMessages) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedHotelInterfaceFailedMessages) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedHotelInterfaceFailedMessages) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedHotelInterfaceFailedMessages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedHotelInterfaceFailedMessages) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedHotelInterfaceFailedMessages) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedHotelInterfaceFailedMessages) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedHotelInterfaceFailedMessages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


