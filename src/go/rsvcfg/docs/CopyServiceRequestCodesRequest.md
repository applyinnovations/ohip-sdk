# CopyServiceRequestCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ServiceRequestCodes** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the template service request code(s) to be copied. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyServiceRequestCodesRequest

`func NewCopyServiceRequestCodesRequest() *CopyServiceRequestCodesRequest`

NewCopyServiceRequestCodesRequest instantiates a new CopyServiceRequestCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyServiceRequestCodesRequestWithDefaults

`func NewCopyServiceRequestCodesRequestWithDefaults() *CopyServiceRequestCodesRequest`

NewCopyServiceRequestCodesRequestWithDefaults instantiates a new CopyServiceRequestCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyServiceRequestCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyServiceRequestCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyServiceRequestCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyServiceRequestCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRequestCodes

`func (o *CopyServiceRequestCodesRequest) GetServiceRequestCodes() []CopyConfigurationCodeType`

GetServiceRequestCodes returns the ServiceRequestCodes field if non-nil, zero value otherwise.

### GetServiceRequestCodesOk

`func (o *CopyServiceRequestCodesRequest) GetServiceRequestCodesOk() (*[]CopyConfigurationCodeType, bool)`

GetServiceRequestCodesOk returns a tuple with the ServiceRequestCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodes

`func (o *CopyServiceRequestCodesRequest) SetServiceRequestCodes(v []CopyConfigurationCodeType)`

SetServiceRequestCodes sets ServiceRequestCodes field to given value.

### HasServiceRequestCodes

`func (o *CopyServiceRequestCodesRequest) HasServiceRequestCodes() bool`

HasServiceRequestCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyServiceRequestCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyServiceRequestCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyServiceRequestCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyServiceRequestCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


