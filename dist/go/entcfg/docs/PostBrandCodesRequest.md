# PostBrandCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BrandCodes** | Pointer to [**[]BrandCodeType**](BrandCodeType.md) | List of Brand Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBrandCodesRequest

`func NewPostBrandCodesRequest() *PostBrandCodesRequest`

NewPostBrandCodesRequest instantiates a new PostBrandCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBrandCodesRequestWithDefaults

`func NewPostBrandCodesRequestWithDefaults() *PostBrandCodesRequest`

NewPostBrandCodesRequestWithDefaults instantiates a new PostBrandCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBrandCodes

`func (o *PostBrandCodesRequest) GetBrandCodes() []BrandCodeType`

GetBrandCodes returns the BrandCodes field if non-nil, zero value otherwise.

### GetBrandCodesOk

`func (o *PostBrandCodesRequest) GetBrandCodesOk() (*[]BrandCodeType, bool)`

GetBrandCodesOk returns a tuple with the BrandCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrandCodes

`func (o *PostBrandCodesRequest) SetBrandCodes(v []BrandCodeType)`

SetBrandCodes sets BrandCodes field to given value.

### HasBrandCodes

`func (o *PostBrandCodesRequest) HasBrandCodes() bool`

HasBrandCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostBrandCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBrandCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBrandCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBrandCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBrandCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBrandCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBrandCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBrandCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


