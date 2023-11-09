# CompAccountingJournal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**JournalPostings** | Pointer to [**FinancialPostingsType**](FinancialPostingsType.md) |  | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCompAccountingJournal

`func NewCompAccountingJournal() *CompAccountingJournal`

NewCompAccountingJournal instantiates a new CompAccountingJournal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompAccountingJournalWithDefaults

`func NewCompAccountingJournalWithDefaults() *CompAccountingJournal`

NewCompAccountingJournalWithDefaults instantiates a new CompAccountingJournal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CompAccountingJournal) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompAccountingJournal) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompAccountingJournal) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompAccountingJournal) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *CompAccountingJournal) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CompAccountingJournal) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CompAccountingJournal) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CompAccountingJournal) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetJournalPostings

`func (o *CompAccountingJournal) GetJournalPostings() FinancialPostingsType`

GetJournalPostings returns the JournalPostings field if non-nil, zero value otherwise.

### GetJournalPostingsOk

`func (o *CompAccountingJournal) GetJournalPostingsOk() (*FinancialPostingsType, bool)`

GetJournalPostingsOk returns a tuple with the JournalPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJournalPostings

`func (o *CompAccountingJournal) SetJournalPostings(v FinancialPostingsType)`

SetJournalPostings sets JournalPostings field to given value.

### HasJournalPostings

`func (o *CompAccountingJournal) HasJournalPostings() bool`

HasJournalPostings returns a boolean if a field has been set.

### GetLimit

`func (o *CompAccountingJournal) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *CompAccountingJournal) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *CompAccountingJournal) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *CompAccountingJournal) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *CompAccountingJournal) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompAccountingJournal) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompAccountingJournal) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompAccountingJournal) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *CompAccountingJournal) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *CompAccountingJournal) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *CompAccountingJournal) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *CompAccountingJournal) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *CompAccountingJournal) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *CompAccountingJournal) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *CompAccountingJournal) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *CompAccountingJournal) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompAccountingJournal) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompAccountingJournal) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompAccountingJournal) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompAccountingJournal) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *CompAccountingJournal) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompAccountingJournal) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompAccountingJournal) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompAccountingJournal) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


