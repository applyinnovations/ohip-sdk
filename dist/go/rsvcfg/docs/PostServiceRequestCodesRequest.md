# PostServiceRequestCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ServiceRequestCodes** | Pointer to [**[]ServiceRequestCodeType**](ServiceRequestCodeType.md) | Details for service request code type. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostServiceRequestCodesRequest

`func NewPostServiceRequestCodesRequest() *PostServiceRequestCodesRequest`

NewPostServiceRequestCodesRequest instantiates a new PostServiceRequestCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostServiceRequestCodesRequestWithDefaults

`func NewPostServiceRequestCodesRequestWithDefaults() *PostServiceRequestCodesRequest`

NewPostServiceRequestCodesRequestWithDefaults instantiates a new PostServiceRequestCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostServiceRequestCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostServiceRequestCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostServiceRequestCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostServiceRequestCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRequestCodes

`func (o *PostServiceRequestCodesRequest) GetServiceRequestCodes() []ServiceRequestCodeType`

GetServiceRequestCodes returns the ServiceRequestCodes field if non-nil, zero value otherwise.

### GetServiceRequestCodesOk

`func (o *PostServiceRequestCodesRequest) GetServiceRequestCodesOk() (*[]ServiceRequestCodeType, bool)`

GetServiceRequestCodesOk returns a tuple with the ServiceRequestCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodes

`func (o *PostServiceRequestCodesRequest) SetServiceRequestCodes(v []ServiceRequestCodeType)`

SetServiceRequestCodes sets ServiceRequestCodes field to given value.

### HasServiceRequestCodes

`func (o *PostServiceRequestCodesRequest) HasServiceRequestCodes() bool`

HasServiceRequestCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostServiceRequestCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostServiceRequestCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostServiceRequestCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostServiceRequestCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


