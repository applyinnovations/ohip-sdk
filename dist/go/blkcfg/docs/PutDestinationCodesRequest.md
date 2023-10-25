# PutDestinationCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationCodes** | Pointer to [**[]DestinationCodeType**](DestinationCodeType.md) | List of Destination Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutDestinationCodesRequest

`func NewPutDestinationCodesRequest() *PutDestinationCodesRequest`

NewPutDestinationCodesRequest instantiates a new PutDestinationCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDestinationCodesRequestWithDefaults

`func NewPutDestinationCodesRequestWithDefaults() *PutDestinationCodesRequest`

NewPutDestinationCodesRequestWithDefaults instantiates a new PutDestinationCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationCodes

`func (o *PutDestinationCodesRequest) GetDestinationCodes() []DestinationCodeType`

GetDestinationCodes returns the DestinationCodes field if non-nil, zero value otherwise.

### GetDestinationCodesOk

`func (o *PutDestinationCodesRequest) GetDestinationCodesOk() (*[]DestinationCodeType, bool)`

GetDestinationCodesOk returns a tuple with the DestinationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationCodes

`func (o *PutDestinationCodesRequest) SetDestinationCodes(v []DestinationCodeType)`

SetDestinationCodes sets DestinationCodes field to given value.

### HasDestinationCodes

`func (o *PutDestinationCodesRequest) HasDestinationCodes() bool`

HasDestinationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutDestinationCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDestinationCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDestinationCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDestinationCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDestinationCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDestinationCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDestinationCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDestinationCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


