# TemplateGuaranteeCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuaranteeCodes** | Pointer to [**[]GuaranteeConfigType**](GuaranteeConfigType.md) | Guarantee Code details. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateGuaranteeCodesDetails

`func NewTemplateGuaranteeCodesDetails() *TemplateGuaranteeCodesDetails`

NewTemplateGuaranteeCodesDetails instantiates a new TemplateGuaranteeCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateGuaranteeCodesDetailsWithDefaults

`func NewTemplateGuaranteeCodesDetailsWithDefaults() *TemplateGuaranteeCodesDetails`

NewTemplateGuaranteeCodesDetailsWithDefaults instantiates a new TemplateGuaranteeCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuaranteeCodes

`func (o *TemplateGuaranteeCodesDetails) GetGuaranteeCodes() []GuaranteeConfigType`

GetGuaranteeCodes returns the GuaranteeCodes field if non-nil, zero value otherwise.

### GetGuaranteeCodesOk

`func (o *TemplateGuaranteeCodesDetails) GetGuaranteeCodesOk() (*[]GuaranteeConfigType, bool)`

GetGuaranteeCodesOk returns a tuple with the GuaranteeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCodes

`func (o *TemplateGuaranteeCodesDetails) SetGuaranteeCodes(v []GuaranteeConfigType)`

SetGuaranteeCodes sets GuaranteeCodes field to given value.

### HasGuaranteeCodes

`func (o *TemplateGuaranteeCodesDetails) HasGuaranteeCodes() bool`

HasGuaranteeCodes returns a boolean if a field has been set.

### GetTotalPages

`func (o *TemplateGuaranteeCodesDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *TemplateGuaranteeCodesDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *TemplateGuaranteeCodesDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *TemplateGuaranteeCodesDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *TemplateGuaranteeCodesDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *TemplateGuaranteeCodesDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *TemplateGuaranteeCodesDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *TemplateGuaranteeCodesDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *TemplateGuaranteeCodesDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *TemplateGuaranteeCodesDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *TemplateGuaranteeCodesDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *TemplateGuaranteeCodesDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *TemplateGuaranteeCodesDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *TemplateGuaranteeCodesDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *TemplateGuaranteeCodesDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *TemplateGuaranteeCodesDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *TemplateGuaranteeCodesDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *TemplateGuaranteeCodesDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *TemplateGuaranteeCodesDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *TemplateGuaranteeCodesDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *TemplateGuaranteeCodesDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *TemplateGuaranteeCodesDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *TemplateGuaranteeCodesDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *TemplateGuaranteeCodesDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateGuaranteeCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateGuaranteeCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateGuaranteeCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateGuaranteeCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateGuaranteeCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateGuaranteeCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateGuaranteeCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateGuaranteeCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


