# ChangeBrandCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BrandCodes** | Pointer to [**[]BrandCodeType**](BrandCodeType.md) | List of Brand Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeBrandCodesRequest

`func NewChangeBrandCodesRequest() *ChangeBrandCodesRequest`

NewChangeBrandCodesRequest instantiates a new ChangeBrandCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBrandCodesRequestWithDefaults

`func NewChangeBrandCodesRequestWithDefaults() *ChangeBrandCodesRequest`

NewChangeBrandCodesRequestWithDefaults instantiates a new ChangeBrandCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBrandCodes

`func (o *ChangeBrandCodesRequest) GetBrandCodes() []BrandCodeType`

GetBrandCodes returns the BrandCodes field if non-nil, zero value otherwise.

### GetBrandCodesOk

`func (o *ChangeBrandCodesRequest) GetBrandCodesOk() (*[]BrandCodeType, bool)`

GetBrandCodesOk returns a tuple with the BrandCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrandCodes

`func (o *ChangeBrandCodesRequest) SetBrandCodes(v []BrandCodeType)`

SetBrandCodes sets BrandCodes field to given value.

### HasBrandCodes

`func (o *ChangeBrandCodesRequest) HasBrandCodes() bool`

HasBrandCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeBrandCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeBrandCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeBrandCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeBrandCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeBrandCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeBrandCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeBrandCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeBrandCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


