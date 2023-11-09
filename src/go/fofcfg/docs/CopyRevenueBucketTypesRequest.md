# CopyRevenueBucketTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RevenueBucketTypes** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Revenue Bucket Types to be copied. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyRevenueBucketTypesRequest

`func NewCopyRevenueBucketTypesRequest() *CopyRevenueBucketTypesRequest`

NewCopyRevenueBucketTypesRequest instantiates a new CopyRevenueBucketTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRevenueBucketTypesRequestWithDefaults

`func NewCopyRevenueBucketTypesRequestWithDefaults() *CopyRevenueBucketTypesRequest`

NewCopyRevenueBucketTypesRequestWithDefaults instantiates a new CopyRevenueBucketTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyRevenueBucketTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyRevenueBucketTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyRevenueBucketTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyRevenueBucketTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRevenueBucketTypes

`func (o *CopyRevenueBucketTypesRequest) GetRevenueBucketTypes() []CopyConfigurationCodeType`

GetRevenueBucketTypes returns the RevenueBucketTypes field if non-nil, zero value otherwise.

### GetRevenueBucketTypesOk

`func (o *CopyRevenueBucketTypesRequest) GetRevenueBucketTypesOk() (*[]CopyConfigurationCodeType, bool)`

GetRevenueBucketTypesOk returns a tuple with the RevenueBucketTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketTypes

`func (o *CopyRevenueBucketTypesRequest) SetRevenueBucketTypes(v []CopyConfigurationCodeType)`

SetRevenueBucketTypes sets RevenueBucketTypes field to given value.

### HasRevenueBucketTypes

`func (o *CopyRevenueBucketTypesRequest) HasRevenueBucketTypes() bool`

HasRevenueBucketTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyRevenueBucketTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyRevenueBucketTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyRevenueBucketTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyRevenueBucketTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


