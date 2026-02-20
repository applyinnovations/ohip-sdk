# PingDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OperaVersion** | Pointer to **string** | Current Opera Version Number | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewPingDetail

`func NewPingDetail() *PingDetail`

NewPingDetail instantiates a new PingDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPingDetailWithDefaults

`func NewPingDetailWithDefaults() *PingDetail`

NewPingDetailWithDefaults instantiates a new PingDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperaVersion

`func (o *PingDetail) GetOperaVersion() string`

GetOperaVersion returns the OperaVersion field if non-nil, zero value otherwise.

### GetOperaVersionOk

`func (o *PingDetail) GetOperaVersionOk() (*string, bool)`

GetOperaVersionOk returns a tuple with the OperaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperaVersion

`func (o *PingDetail) SetOperaVersion(v string)`

SetOperaVersion sets OperaVersion field to given value.

### HasOperaVersion

`func (o *PingDetail) HasOperaVersion() bool`

HasOperaVersion returns a boolean if a field has been set.

### GetLinks

`func (o *PingDetail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PingDetail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PingDetail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PingDetail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PingDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PingDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PingDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PingDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


