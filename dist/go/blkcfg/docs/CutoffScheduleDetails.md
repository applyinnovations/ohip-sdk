# CutoffScheduleDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CutoffCodes** | Pointer to [**[]CutoffCodeType**](CutoffCodeType.md) | Cutoff Code, which will allow the user to define standard cutoff schedules. Cutoff schedule codes can be applied to blocks, to default number of cutoff days per stay date and room type. A default number number of cutoff days can be set on cutoff scheduler header level, and will be applied when no specific number of days has been defined for a date / room type combination within the cutoff schedule dates. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCutoffScheduleDetails

`func NewCutoffScheduleDetails() *CutoffScheduleDetails`

NewCutoffScheduleDetails instantiates a new CutoffScheduleDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCutoffScheduleDetailsWithDefaults

`func NewCutoffScheduleDetailsWithDefaults() *CutoffScheduleDetails`

NewCutoffScheduleDetailsWithDefaults instantiates a new CutoffScheduleDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCutoffCodes

`func (o *CutoffScheduleDetails) GetCutoffCodes() []CutoffCodeType`

GetCutoffCodes returns the CutoffCodes field if non-nil, zero value otherwise.

### GetCutoffCodesOk

`func (o *CutoffScheduleDetails) GetCutoffCodesOk() (*[]CutoffCodeType, bool)`

GetCutoffCodesOk returns a tuple with the CutoffCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffCodes

`func (o *CutoffScheduleDetails) SetCutoffCodes(v []CutoffCodeType)`

SetCutoffCodes sets CutoffCodes field to given value.

### HasCutoffCodes

`func (o *CutoffScheduleDetails) HasCutoffCodes() bool`

HasCutoffCodes returns a boolean if a field has been set.

### GetTotalPages

`func (o *CutoffScheduleDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *CutoffScheduleDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *CutoffScheduleDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *CutoffScheduleDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *CutoffScheduleDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *CutoffScheduleDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *CutoffScheduleDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *CutoffScheduleDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *CutoffScheduleDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *CutoffScheduleDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *CutoffScheduleDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *CutoffScheduleDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *CutoffScheduleDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CutoffScheduleDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CutoffScheduleDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CutoffScheduleDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CutoffScheduleDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CutoffScheduleDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CutoffScheduleDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CutoffScheduleDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *CutoffScheduleDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CutoffScheduleDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CutoffScheduleDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CutoffScheduleDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *CutoffScheduleDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CutoffScheduleDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CutoffScheduleDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CutoffScheduleDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CutoffScheduleDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CutoffScheduleDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CutoffScheduleDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CutoffScheduleDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


