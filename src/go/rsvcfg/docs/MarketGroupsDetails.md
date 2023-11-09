# MarketGroupsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MarketGroups** | Pointer to [**[]MarketGroupType**](MarketGroupType.md) | Collection of Market Groups. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewMarketGroupsDetails

`func NewMarketGroupsDetails() *MarketGroupsDetails`

NewMarketGroupsDetails instantiates a new MarketGroupsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketGroupsDetailsWithDefaults

`func NewMarketGroupsDetailsWithDefaults() *MarketGroupsDetails`

NewMarketGroupsDetailsWithDefaults instantiates a new MarketGroupsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *MarketGroupsDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *MarketGroupsDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *MarketGroupsDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *MarketGroupsDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *MarketGroupsDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *MarketGroupsDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *MarketGroupsDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *MarketGroupsDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *MarketGroupsDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *MarketGroupsDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *MarketGroupsDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *MarketGroupsDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *MarketGroupsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MarketGroupsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MarketGroupsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MarketGroupsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketGroups

`func (o *MarketGroupsDetails) GetMarketGroups() []MarketGroupType`

GetMarketGroups returns the MarketGroups field if non-nil, zero value otherwise.

### GetMarketGroupsOk

`func (o *MarketGroupsDetails) GetMarketGroupsOk() (*[]MarketGroupType, bool)`

GetMarketGroupsOk returns a tuple with the MarketGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketGroups

`func (o *MarketGroupsDetails) SetMarketGroups(v []MarketGroupType)`

SetMarketGroups sets MarketGroups field to given value.

### HasMarketGroups

`func (o *MarketGroupsDetails) HasMarketGroups() bool`

HasMarketGroups returns a boolean if a field has been set.

### GetOffset

`func (o *MarketGroupsDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *MarketGroupsDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *MarketGroupsDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *MarketGroupsDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *MarketGroupsDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *MarketGroupsDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *MarketGroupsDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *MarketGroupsDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *MarketGroupsDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *MarketGroupsDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *MarketGroupsDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *MarketGroupsDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *MarketGroupsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MarketGroupsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MarketGroupsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MarketGroupsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


