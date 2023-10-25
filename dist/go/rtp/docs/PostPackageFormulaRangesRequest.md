# PostPackageFormulaRangesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PackageFormulaRanges** | Pointer to [**[]PackageFormulaRangeType**](PackageFormulaRangeType.md) | Collection of Package Formula Ranges. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostPackageFormulaRangesRequest

`func NewPostPackageFormulaRangesRequest() *PostPackageFormulaRangesRequest`

NewPostPackageFormulaRangesRequest instantiates a new PostPackageFormulaRangesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostPackageFormulaRangesRequestWithDefaults

`func NewPostPackageFormulaRangesRequestWithDefaults() *PostPackageFormulaRangesRequest`

NewPostPackageFormulaRangesRequestWithDefaults instantiates a new PostPackageFormulaRangesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostPackageFormulaRangesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostPackageFormulaRangesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostPackageFormulaRangesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostPackageFormulaRangesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPackageFormulaRanges

`func (o *PostPackageFormulaRangesRequest) GetPackageFormulaRanges() []PackageFormulaRangeType`

GetPackageFormulaRanges returns the PackageFormulaRanges field if non-nil, zero value otherwise.

### GetPackageFormulaRangesOk

`func (o *PostPackageFormulaRangesRequest) GetPackageFormulaRangesOk() (*[]PackageFormulaRangeType, bool)`

GetPackageFormulaRangesOk returns a tuple with the PackageFormulaRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageFormulaRanges

`func (o *PostPackageFormulaRangesRequest) SetPackageFormulaRanges(v []PackageFormulaRangeType)`

SetPackageFormulaRanges sets PackageFormulaRanges field to given value.

### HasPackageFormulaRanges

`func (o *PostPackageFormulaRangesRequest) HasPackageFormulaRanges() bool`

HasPackageFormulaRanges returns a boolean if a field has been set.

### GetWarnings

`func (o *PostPackageFormulaRangesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostPackageFormulaRangesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostPackageFormulaRangesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostPackageFormulaRangesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


