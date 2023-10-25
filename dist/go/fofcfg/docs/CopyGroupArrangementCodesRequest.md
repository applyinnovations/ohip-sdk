# CopyGroupArrangementCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the group arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyGroupArrangementCodesRequest

`func NewCopyGroupArrangementCodesRequest() *CopyGroupArrangementCodesRequest`

NewCopyGroupArrangementCodesRequest instantiates a new CopyGroupArrangementCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyGroupArrangementCodesRequestWithDefaults

`func NewCopyGroupArrangementCodesRequestWithDefaults() *CopyGroupArrangementCodesRequest`

NewCopyGroupArrangementCodesRequestWithDefaults instantiates a new CopyGroupArrangementCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupArrangementCode

`func (o *CopyGroupArrangementCodesRequest) GetGroupArrangementCode() []CopyConfigurationCodeType`

GetGroupArrangementCode returns the GroupArrangementCode field if non-nil, zero value otherwise.

### GetGroupArrangementCodeOk

`func (o *CopyGroupArrangementCodesRequest) GetGroupArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetGroupArrangementCodeOk returns a tuple with the GroupArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupArrangementCode

`func (o *CopyGroupArrangementCodesRequest) SetGroupArrangementCode(v []CopyConfigurationCodeType)`

SetGroupArrangementCode sets GroupArrangementCode field to given value.

### HasGroupArrangementCode

`func (o *CopyGroupArrangementCodesRequest) HasGroupArrangementCode() bool`

HasGroupArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *CopyGroupArrangementCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyGroupArrangementCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyGroupArrangementCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyGroupArrangementCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyGroupArrangementCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyGroupArrangementCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyGroupArrangementCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyGroupArrangementCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


