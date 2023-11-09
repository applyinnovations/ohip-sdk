# RetrievedGuestMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestMessages** | Pointer to [**GuestMessageCodesType**](GuestMessageCodesType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRetrievedGuestMessages

`func NewRetrievedGuestMessages() *RetrievedGuestMessages`

NewRetrievedGuestMessages instantiates a new RetrievedGuestMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRetrievedGuestMessagesWithDefaults

`func NewRetrievedGuestMessagesWithDefaults() *RetrievedGuestMessages`

NewRetrievedGuestMessagesWithDefaults instantiates a new RetrievedGuestMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestMessages

`func (o *RetrievedGuestMessages) GetGuestMessages() GuestMessageCodesType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *RetrievedGuestMessages) GetGuestMessagesOk() (*GuestMessageCodesType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *RetrievedGuestMessages) SetGuestMessages(v GuestMessageCodesType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *RetrievedGuestMessages) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetHasMore

`func (o *RetrievedGuestMessages) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RetrievedGuestMessages) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RetrievedGuestMessages) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RetrievedGuestMessages) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RetrievedGuestMessages) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RetrievedGuestMessages) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RetrievedGuestMessages) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RetrievedGuestMessages) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *RetrievedGuestMessages) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RetrievedGuestMessages) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RetrievedGuestMessages) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RetrievedGuestMessages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *RetrievedGuestMessages) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RetrievedGuestMessages) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RetrievedGuestMessages) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RetrievedGuestMessages) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *RetrievedGuestMessages) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RetrievedGuestMessages) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RetrievedGuestMessages) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RetrievedGuestMessages) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RetrievedGuestMessages) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RetrievedGuestMessages) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RetrievedGuestMessages) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RetrievedGuestMessages) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *RetrievedGuestMessages) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RetrievedGuestMessages) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RetrievedGuestMessages) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RetrievedGuestMessages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


