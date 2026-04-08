# PackageArrangementCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the package arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPackageArrangementCodesCopy

`func NewPackageArrangementCodesCopy() *PackageArrangementCodesCopy`

NewPackageArrangementCodesCopy instantiates a new PackageArrangementCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageArrangementCodesCopyWithDefaults

`func NewPackageArrangementCodesCopyWithDefaults() *PackageArrangementCodesCopy`

NewPackageArrangementCodesCopyWithDefaults instantiates a new PackageArrangementCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageArrangementCode

`func (o *PackageArrangementCodesCopy) GetPackageArrangementCode() []CopyConfigurationCodeType`

GetPackageArrangementCode returns the PackageArrangementCode field if non-nil, zero value otherwise.

### GetPackageArrangementCodeOk

`func (o *PackageArrangementCodesCopy) GetPackageArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetPackageArrangementCodeOk returns a tuple with the PackageArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageArrangementCode

`func (o *PackageArrangementCodesCopy) SetPackageArrangementCode(v []CopyConfigurationCodeType)`

SetPackageArrangementCode sets PackageArrangementCode field to given value.

### HasPackageArrangementCode

`func (o *PackageArrangementCodesCopy) HasPackageArrangementCode() bool`

HasPackageArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *PackageArrangementCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PackageArrangementCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PackageArrangementCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PackageArrangementCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PackageArrangementCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PackageArrangementCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PackageArrangementCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PackageArrangementCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


