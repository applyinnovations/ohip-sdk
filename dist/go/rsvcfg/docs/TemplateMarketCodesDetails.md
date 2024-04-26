# TemplateMarketCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TemplateMarketCodes** | Pointer to [**[]TemplateMarketCodeType**](TemplateMarketCodeType.md) | Collection of template market codes. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateMarketCodesDetails

`func NewTemplateMarketCodesDetails() *TemplateMarketCodesDetails`

NewTemplateMarketCodesDetails instantiates a new TemplateMarketCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateMarketCodesDetailsWithDefaults

`func NewTemplateMarketCodesDetailsWithDefaults() *TemplateMarketCodesDetails`

NewTemplateMarketCodesDetailsWithDefaults instantiates a new TemplateMarketCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *TemplateMarketCodesDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *TemplateMarketCodesDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *TemplateMarketCodesDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *TemplateMarketCodesDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *TemplateMarketCodesDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *TemplateMarketCodesDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *TemplateMarketCodesDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *TemplateMarketCodesDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *TemplateMarketCodesDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *TemplateMarketCodesDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *TemplateMarketCodesDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *TemplateMarketCodesDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateMarketCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateMarketCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateMarketCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateMarketCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *TemplateMarketCodesDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *TemplateMarketCodesDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *TemplateMarketCodesDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *TemplateMarketCodesDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTemplateMarketCodes

`func (o *TemplateMarketCodesDetails) GetTemplateMarketCodes() []TemplateMarketCodeType`

GetTemplateMarketCodes returns the TemplateMarketCodes field if non-nil, zero value otherwise.

### GetTemplateMarketCodesOk

`func (o *TemplateMarketCodesDetails) GetTemplateMarketCodesOk() (*[]TemplateMarketCodeType, bool)`

GetTemplateMarketCodesOk returns a tuple with the TemplateMarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketCodes

`func (o *TemplateMarketCodesDetails) SetTemplateMarketCodes(v []TemplateMarketCodeType)`

SetTemplateMarketCodes sets TemplateMarketCodes field to given value.

### HasTemplateMarketCodes

`func (o *TemplateMarketCodesDetails) HasTemplateMarketCodes() bool`

HasTemplateMarketCodes returns a boolean if a field has been set.

### GetTotalPages

`func (o *TemplateMarketCodesDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *TemplateMarketCodesDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *TemplateMarketCodesDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *TemplateMarketCodesDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *TemplateMarketCodesDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *TemplateMarketCodesDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *TemplateMarketCodesDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *TemplateMarketCodesDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateMarketCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateMarketCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateMarketCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateMarketCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


