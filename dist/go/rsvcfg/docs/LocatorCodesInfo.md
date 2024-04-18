# LocatorCodesInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**LocatorCodes** | Pointer to [**[]LocatorCodeType**](LocatorCodeType.md) | Collection of locator codes. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLocatorCodesInfo

`func NewLocatorCodesInfo() *LocatorCodesInfo`

NewLocatorCodesInfo instantiates a new LocatorCodesInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocatorCodesInfoWithDefaults

`func NewLocatorCodesInfoWithDefaults() *LocatorCodesInfo`

NewLocatorCodesInfoWithDefaults instantiates a new LocatorCodesInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasMore

`func (o *LocatorCodesInfo) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *LocatorCodesInfo) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *LocatorCodesInfo) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *LocatorCodesInfo) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *LocatorCodesInfo) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *LocatorCodesInfo) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *LocatorCodesInfo) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *LocatorCodesInfo) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *LocatorCodesInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LocatorCodesInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LocatorCodesInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LocatorCodesInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocatorCodes

`func (o *LocatorCodesInfo) GetLocatorCodes() []LocatorCodeType`

GetLocatorCodes returns the LocatorCodes field if non-nil, zero value otherwise.

### GetLocatorCodesOk

`func (o *LocatorCodesInfo) GetLocatorCodesOk() (*[]LocatorCodeType, bool)`

GetLocatorCodesOk returns a tuple with the LocatorCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorCodes

`func (o *LocatorCodesInfo) SetLocatorCodes(v []LocatorCodeType)`

SetLocatorCodes sets LocatorCodes field to given value.

### HasLocatorCodes

`func (o *LocatorCodesInfo) HasLocatorCodes() bool`

HasLocatorCodes returns a boolean if a field has been set.

### GetOffset

`func (o *LocatorCodesInfo) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *LocatorCodesInfo) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *LocatorCodesInfo) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *LocatorCodesInfo) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *LocatorCodesInfo) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *LocatorCodesInfo) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *LocatorCodesInfo) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *LocatorCodesInfo) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *LocatorCodesInfo) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *LocatorCodesInfo) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *LocatorCodesInfo) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *LocatorCodesInfo) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *LocatorCodesInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LocatorCodesInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LocatorCodesInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LocatorCodesInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

