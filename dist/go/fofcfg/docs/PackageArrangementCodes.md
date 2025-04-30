# PackageArrangementCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageArrangementCodes** | Pointer to [**[]PackageArrangementCodeType**](PackageArrangementCodeType.md) | Details for package arrangement codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPackageArrangementCodes

`func NewPackageArrangementCodes() *PackageArrangementCodes`

NewPackageArrangementCodes instantiates a new PackageArrangementCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageArrangementCodesWithDefaults

`func NewPackageArrangementCodesWithDefaults() *PackageArrangementCodes`

NewPackageArrangementCodesWithDefaults instantiates a new PackageArrangementCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageArrangementCodes

`func (o *PackageArrangementCodes) GetPackageArrangementCodes() []PackageArrangementCodeType`

GetPackageArrangementCodes returns the PackageArrangementCodes field if non-nil, zero value otherwise.

### GetPackageArrangementCodesOk

`func (o *PackageArrangementCodes) GetPackageArrangementCodesOk() (*[]PackageArrangementCodeType, bool)`

GetPackageArrangementCodesOk returns a tuple with the PackageArrangementCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageArrangementCodes

`func (o *PackageArrangementCodes) SetPackageArrangementCodes(v []PackageArrangementCodeType)`

SetPackageArrangementCodes sets PackageArrangementCodes field to given value.

### HasPackageArrangementCodes

`func (o *PackageArrangementCodes) HasPackageArrangementCodes() bool`

HasPackageArrangementCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PackageArrangementCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PackageArrangementCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PackageArrangementCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PackageArrangementCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PackageArrangementCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PackageArrangementCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PackageArrangementCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PackageArrangementCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


