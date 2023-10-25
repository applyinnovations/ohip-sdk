# PutWaitlistCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**WaitlistCodes** | Pointer to [**[]WaitlistCodeType**](WaitlistCodeType.md) | List of Waitlist Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutWaitlistCodesRequest

`func NewPutWaitlistCodesRequest() *PutWaitlistCodesRequest`

NewPutWaitlistCodesRequest instantiates a new PutWaitlistCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutWaitlistCodesRequestWithDefaults

`func NewPutWaitlistCodesRequestWithDefaults() *PutWaitlistCodesRequest`

NewPutWaitlistCodesRequestWithDefaults instantiates a new PutWaitlistCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutWaitlistCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutWaitlistCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutWaitlistCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutWaitlistCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWaitlistCodes

`func (o *PutWaitlistCodesRequest) GetWaitlistCodes() []WaitlistCodeType`

GetWaitlistCodes returns the WaitlistCodes field if non-nil, zero value otherwise.

### GetWaitlistCodesOk

`func (o *PutWaitlistCodesRequest) GetWaitlistCodesOk() (*[]WaitlistCodeType, bool)`

GetWaitlistCodesOk returns a tuple with the WaitlistCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistCodes

`func (o *PutWaitlistCodesRequest) SetWaitlistCodes(v []WaitlistCodeType)`

SetWaitlistCodes sets WaitlistCodes field to given value.

### HasWaitlistCodes

`func (o *PutWaitlistCodesRequest) HasWaitlistCodes() bool`

HasWaitlistCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutWaitlistCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutWaitlistCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutWaitlistCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutWaitlistCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


