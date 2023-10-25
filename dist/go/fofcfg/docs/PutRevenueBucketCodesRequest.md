# PutRevenueBucketCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RevenueBucketCodes** | Pointer to [**[]RevenueBucketCodeType**](RevenueBucketCodeType.md) | Details for Revenue Bucket codes along with associated transaction codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRevenueBucketCodesRequest

`func NewPutRevenueBucketCodesRequest() *PutRevenueBucketCodesRequest`

NewPutRevenueBucketCodesRequest instantiates a new PutRevenueBucketCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRevenueBucketCodesRequestWithDefaults

`func NewPutRevenueBucketCodesRequestWithDefaults() *PutRevenueBucketCodesRequest`

NewPutRevenueBucketCodesRequestWithDefaults instantiates a new PutRevenueBucketCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRevenueBucketCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRevenueBucketCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRevenueBucketCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRevenueBucketCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRevenueBucketCodes

`func (o *PutRevenueBucketCodesRequest) GetRevenueBucketCodes() []RevenueBucketCodeType`

GetRevenueBucketCodes returns the RevenueBucketCodes field if non-nil, zero value otherwise.

### GetRevenueBucketCodesOk

`func (o *PutRevenueBucketCodesRequest) GetRevenueBucketCodesOk() (*[]RevenueBucketCodeType, bool)`

GetRevenueBucketCodesOk returns a tuple with the RevenueBucketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketCodes

`func (o *PutRevenueBucketCodesRequest) SetRevenueBucketCodes(v []RevenueBucketCodeType)`

SetRevenueBucketCodes sets RevenueBucketCodes field to given value.

### HasRevenueBucketCodes

`func (o *PutRevenueBucketCodesRequest) HasRevenueBucketCodes() bool`

HasRevenueBucketCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRevenueBucketCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRevenueBucketCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRevenueBucketCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRevenueBucketCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


