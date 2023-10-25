# PostBedTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BedTypes** | Pointer to [**[]BedTypeType**](BedTypeType.md) | Bed Type Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBedTypesRequest

`func NewPostBedTypesRequest() *PostBedTypesRequest`

NewPostBedTypesRequest instantiates a new PostBedTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBedTypesRequestWithDefaults

`func NewPostBedTypesRequestWithDefaults() *PostBedTypesRequest`

NewPostBedTypesRequestWithDefaults instantiates a new PostBedTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTypes

`func (o *PostBedTypesRequest) GetBedTypes() []BedTypeType`

GetBedTypes returns the BedTypes field if non-nil, zero value otherwise.

### GetBedTypesOk

`func (o *PostBedTypesRequest) GetBedTypesOk() (*[]BedTypeType, bool)`

GetBedTypesOk returns a tuple with the BedTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypes

`func (o *PostBedTypesRequest) SetBedTypes(v []BedTypeType)`

SetBedTypes sets BedTypes field to given value.

### HasBedTypes

`func (o *PostBedTypesRequest) HasBedTypes() bool`

HasBedTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostBedTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBedTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBedTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBedTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBedTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBedTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBedTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBedTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


