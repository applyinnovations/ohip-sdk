# PostBedTaxInfoRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BedTaxInfoType** | Pointer to [**BedTaxInfoType**](BedTaxInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBedTaxInfoRequest

`func NewPostBedTaxInfoRequest() *PostBedTaxInfoRequest`

NewPostBedTaxInfoRequest instantiates a new PostBedTaxInfoRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBedTaxInfoRequestWithDefaults

`func NewPostBedTaxInfoRequestWithDefaults() *PostBedTaxInfoRequest`

NewPostBedTaxInfoRequestWithDefaults instantiates a new PostBedTaxInfoRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTaxInfoType

`func (o *PostBedTaxInfoRequest) GetBedTaxInfoType() BedTaxInfoType`

GetBedTaxInfoType returns the BedTaxInfoType field if non-nil, zero value otherwise.

### GetBedTaxInfoTypeOk

`func (o *PostBedTaxInfoRequest) GetBedTaxInfoTypeOk() (*BedTaxInfoType, bool)`

GetBedTaxInfoTypeOk returns a tuple with the BedTaxInfoType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTaxInfoType

`func (o *PostBedTaxInfoRequest) SetBedTaxInfoType(v BedTaxInfoType)`

SetBedTaxInfoType sets BedTaxInfoType field to given value.

### HasBedTaxInfoType

`func (o *PostBedTaxInfoRequest) HasBedTaxInfoType() bool`

HasBedTaxInfoType returns a boolean if a field has been set.

### GetLinks

`func (o *PostBedTaxInfoRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBedTaxInfoRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBedTaxInfoRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBedTaxInfoRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBedTaxInfoRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBedTaxInfoRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBedTaxInfoRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBedTaxInfoRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


