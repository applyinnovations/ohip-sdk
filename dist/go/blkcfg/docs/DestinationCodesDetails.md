# DestinationCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationCodes** | Pointer to [**[]DestinationCodeType**](DestinationCodeType.md) | List of Destination Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDestinationCodesDetails

`func NewDestinationCodesDetails() *DestinationCodesDetails`

NewDestinationCodesDetails instantiates a new DestinationCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDestinationCodesDetailsWithDefaults

`func NewDestinationCodesDetailsWithDefaults() *DestinationCodesDetails`

NewDestinationCodesDetailsWithDefaults instantiates a new DestinationCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationCodes

`func (o *DestinationCodesDetails) GetDestinationCodes() []DestinationCodeType`

GetDestinationCodes returns the DestinationCodes field if non-nil, zero value otherwise.

### GetDestinationCodesOk

`func (o *DestinationCodesDetails) GetDestinationCodesOk() (*[]DestinationCodeType, bool)`

GetDestinationCodesOk returns a tuple with the DestinationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationCodes

`func (o *DestinationCodesDetails) SetDestinationCodes(v []DestinationCodeType)`

SetDestinationCodes sets DestinationCodes field to given value.

### HasDestinationCodes

`func (o *DestinationCodesDetails) HasDestinationCodes() bool`

HasDestinationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *DestinationCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DestinationCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DestinationCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DestinationCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DestinationCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DestinationCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DestinationCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DestinationCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


