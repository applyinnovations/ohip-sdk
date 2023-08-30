# CopyActivityLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInstructions** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | Information needed to copy configuration code from one property to the other. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyActivityLocationsRequest

`func NewCopyActivityLocationsRequest() *CopyActivityLocationsRequest`

NewCopyActivityLocationsRequest instantiates a new CopyActivityLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyActivityLocationsRequestWithDefaults

`func NewCopyActivityLocationsRequestWithDefaults() *CopyActivityLocationsRequest`

NewCopyActivityLocationsRequestWithDefaults instantiates a new CopyActivityLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInstructions

`func (o *CopyActivityLocationsRequest) GetCopyInstructions() []CopyConfigurationCodeType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *CopyActivityLocationsRequest) GetCopyInstructionsOk() (*[]CopyConfigurationCodeType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *CopyActivityLocationsRequest) SetCopyInstructions(v []CopyConfigurationCodeType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *CopyActivityLocationsRequest) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *CopyActivityLocationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyActivityLocationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyActivityLocationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyActivityLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyActivityLocationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyActivityLocationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyActivityLocationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyActivityLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


