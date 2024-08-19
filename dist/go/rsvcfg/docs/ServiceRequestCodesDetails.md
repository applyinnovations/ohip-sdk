# ServiceRequestCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**ServiceRequestCodes** | Pointer to [**[]ServiceRequestCodeType**](ServiceRequestCodeType.md) | Details for service request code type. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewServiceRequestCodesDetails

`func NewServiceRequestCodesDetails() *ServiceRequestCodesDetails`

NewServiceRequestCodesDetails instantiates a new ServiceRequestCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestCodesDetailsWithDefaults

`func NewServiceRequestCodesDetailsWithDefaults() *ServiceRequestCodesDetails`

NewServiceRequestCodesDetailsWithDefaults instantiates a new ServiceRequestCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ServiceRequestCodesDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ServiceRequestCodesDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ServiceRequestCodesDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ServiceRequestCodesDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ServiceRequestCodesDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ServiceRequestCodesDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ServiceRequestCodesDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ServiceRequestCodesDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *ServiceRequestCodesDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ServiceRequestCodesDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ServiceRequestCodesDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ServiceRequestCodesDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *ServiceRequestCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceRequestCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceRequestCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceRequestCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *ServiceRequestCodesDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ServiceRequestCodesDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ServiceRequestCodesDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ServiceRequestCodesDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetServiceRequestCodes

`func (o *ServiceRequestCodesDetails) GetServiceRequestCodes() []ServiceRequestCodeType`

GetServiceRequestCodes returns the ServiceRequestCodes field if non-nil, zero value otherwise.

### GetServiceRequestCodesOk

`func (o *ServiceRequestCodesDetails) GetServiceRequestCodesOk() (*[]ServiceRequestCodeType, bool)`

GetServiceRequestCodesOk returns a tuple with the ServiceRequestCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodes

`func (o *ServiceRequestCodesDetails) SetServiceRequestCodes(v []ServiceRequestCodeType)`

SetServiceRequestCodes sets ServiceRequestCodes field to given value.

### HasServiceRequestCodes

`func (o *ServiceRequestCodesDetails) HasServiceRequestCodes() bool`

HasServiceRequestCodes returns a boolean if a field has been set.

### GetTotalPages

`func (o *ServiceRequestCodesDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ServiceRequestCodesDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ServiceRequestCodesDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *ServiceRequestCodesDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *ServiceRequestCodesDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ServiceRequestCodesDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ServiceRequestCodesDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ServiceRequestCodesDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceRequestCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceRequestCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceRequestCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceRequestCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


