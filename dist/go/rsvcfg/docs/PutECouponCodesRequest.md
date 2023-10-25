# PutECouponCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECouponCodes** | Pointer to [**[]ECouponCodeType**](ECouponCodeType.md) | List of eCoupon Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutECouponCodesRequest

`func NewPutECouponCodesRequest() *PutECouponCodesRequest`

NewPutECouponCodesRequest instantiates a new PutECouponCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutECouponCodesRequestWithDefaults

`func NewPutECouponCodesRequestWithDefaults() *PutECouponCodesRequest`

NewPutECouponCodesRequestWithDefaults instantiates a new PutECouponCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECouponCodes

`func (o *PutECouponCodesRequest) GetECouponCodes() []ECouponCodeType`

GetECouponCodes returns the ECouponCodes field if non-nil, zero value otherwise.

### GetECouponCodesOk

`func (o *PutECouponCodesRequest) GetECouponCodesOk() (*[]ECouponCodeType, bool)`

GetECouponCodesOk returns a tuple with the ECouponCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECouponCodes

`func (o *PutECouponCodesRequest) SetECouponCodes(v []ECouponCodeType)`

SetECouponCodes sets ECouponCodes field to given value.

### HasECouponCodes

`func (o *PutECouponCodesRequest) HasECouponCodes() bool`

HasECouponCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutECouponCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutECouponCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutECouponCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutECouponCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutECouponCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutECouponCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutECouponCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutECouponCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


