# PutBlockLostBookingCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockLostBookingCodes** | Pointer to [**[]BlockLostBookingCodeType**](BlockLostBookingCodeType.md) | List of Block Lost Booking Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutBlockLostBookingCodesRequest

`func NewPutBlockLostBookingCodesRequest() *PutBlockLostBookingCodesRequest`

NewPutBlockLostBookingCodesRequest instantiates a new PutBlockLostBookingCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBlockLostBookingCodesRequestWithDefaults

`func NewPutBlockLostBookingCodesRequestWithDefaults() *PutBlockLostBookingCodesRequest`

NewPutBlockLostBookingCodesRequestWithDefaults instantiates a new PutBlockLostBookingCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockLostBookingCodes

`func (o *PutBlockLostBookingCodesRequest) GetBlockLostBookingCodes() []BlockLostBookingCodeType`

GetBlockLostBookingCodes returns the BlockLostBookingCodes field if non-nil, zero value otherwise.

### GetBlockLostBookingCodesOk

`func (o *PutBlockLostBookingCodesRequest) GetBlockLostBookingCodesOk() (*[]BlockLostBookingCodeType, bool)`

GetBlockLostBookingCodesOk returns a tuple with the BlockLostBookingCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockLostBookingCodes

`func (o *PutBlockLostBookingCodesRequest) SetBlockLostBookingCodes(v []BlockLostBookingCodeType)`

SetBlockLostBookingCodes sets BlockLostBookingCodes field to given value.

### HasBlockLostBookingCodes

`func (o *PutBlockLostBookingCodesRequest) HasBlockLostBookingCodes() bool`

HasBlockLostBookingCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutBlockLostBookingCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBlockLostBookingCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBlockLostBookingCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBlockLostBookingCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBlockLostBookingCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBlockLostBookingCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBlockLostBookingCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBlockLostBookingCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


