# CopyCustomChargeExemptionsConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomChargeExemptionsConfigCopy** | Pointer to [**[]CopyCustomChargeExemptionConfigType**](CopyCustomChargeExemptionConfigType.md) | List of the Custom Charge Exemptions to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyCustomChargeExemptionsConfigRequest

`func NewCopyCustomChargeExemptionsConfigRequest() *CopyCustomChargeExemptionsConfigRequest`

NewCopyCustomChargeExemptionsConfigRequest instantiates a new CopyCustomChargeExemptionsConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCustomChargeExemptionsConfigRequestWithDefaults

`func NewCopyCustomChargeExemptionsConfigRequestWithDefaults() *CopyCustomChargeExemptionsConfigRequest`

NewCopyCustomChargeExemptionsConfigRequestWithDefaults instantiates a new CopyCustomChargeExemptionsConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomChargeExemptionsConfigCopy

`func (o *CopyCustomChargeExemptionsConfigRequest) GetCustomChargeExemptionsConfigCopy() []CopyCustomChargeExemptionConfigType`

GetCustomChargeExemptionsConfigCopy returns the CustomChargeExemptionsConfigCopy field if non-nil, zero value otherwise.

### GetCustomChargeExemptionsConfigCopyOk

`func (o *CopyCustomChargeExemptionsConfigRequest) GetCustomChargeExemptionsConfigCopyOk() (*[]CopyCustomChargeExemptionConfigType, bool)`

GetCustomChargeExemptionsConfigCopyOk returns a tuple with the CustomChargeExemptionsConfigCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeExemptionsConfigCopy

`func (o *CopyCustomChargeExemptionsConfigRequest) SetCustomChargeExemptionsConfigCopy(v []CopyCustomChargeExemptionConfigType)`

SetCustomChargeExemptionsConfigCopy sets CustomChargeExemptionsConfigCopy field to given value.

### HasCustomChargeExemptionsConfigCopy

`func (o *CopyCustomChargeExemptionsConfigRequest) HasCustomChargeExemptionsConfigCopy() bool`

HasCustomChargeExemptionsConfigCopy returns a boolean if a field has been set.

### GetLinks

`func (o *CopyCustomChargeExemptionsConfigRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyCustomChargeExemptionsConfigRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyCustomChargeExemptionsConfigRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyCustomChargeExemptionsConfigRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyCustomChargeExemptionsConfigRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyCustomChargeExemptionsConfigRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyCustomChargeExemptionsConfigRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyCustomChargeExemptionsConfigRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


