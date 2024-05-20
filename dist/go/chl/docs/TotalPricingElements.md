# TotalPricingElements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalPricingElements** | Pointer to [**[]TotalPricingElementType**](TotalPricingElementType.md) | List of Total Pricing Element Type | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTotalPricingElements

`func NewTotalPricingElements() *TotalPricingElements`

NewTotalPricingElements instantiates a new TotalPricingElements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTotalPricingElementsWithDefaults

`func NewTotalPricingElementsWithDefaults() *TotalPricingElements`

NewTotalPricingElementsWithDefaults instantiates a new TotalPricingElements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *TotalPricingElements) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *TotalPricingElements) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *TotalPricingElements) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *TotalPricingElements) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *TotalPricingElements) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *TotalPricingElements) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *TotalPricingElements) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *TotalPricingElements) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *TotalPricingElements) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *TotalPricingElements) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *TotalPricingElements) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *TotalPricingElements) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *TotalPricingElements) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TotalPricingElements) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TotalPricingElements) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TotalPricingElements) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *TotalPricingElements) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *TotalPricingElements) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *TotalPricingElements) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *TotalPricingElements) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *TotalPricingElements) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *TotalPricingElements) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *TotalPricingElements) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *TotalPricingElements) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalPricingElements

`func (o *TotalPricingElements) GetTotalPricingElements() []TotalPricingElementType`

GetTotalPricingElements returns the TotalPricingElements field if non-nil, zero value otherwise.

### GetTotalPricingElementsOk

`func (o *TotalPricingElements) GetTotalPricingElementsOk() (*[]TotalPricingElementType, bool)`

GetTotalPricingElementsOk returns a tuple with the TotalPricingElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPricingElements

`func (o *TotalPricingElements) SetTotalPricingElements(v []TotalPricingElementType)`

SetTotalPricingElements sets TotalPricingElements field to given value.

### HasTotalPricingElements

`func (o *TotalPricingElements) HasTotalPricingElements() bool`

HasTotalPricingElements returns a boolean if a field has been set.

### GetTotalResults

`func (o *TotalPricingElements) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *TotalPricingElements) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *TotalPricingElements) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *TotalPricingElements) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *TotalPricingElements) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TotalPricingElements) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TotalPricingElements) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TotalPricingElements) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


