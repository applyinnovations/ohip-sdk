# PostDestinationCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationCodes** | Pointer to [**[]DestinationCodeType**](DestinationCodeType.md) | List of Destination Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostDestinationCodesRequest

`func NewPostDestinationCodesRequest() *PostDestinationCodesRequest`

NewPostDestinationCodesRequest instantiates a new PostDestinationCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostDestinationCodesRequestWithDefaults

`func NewPostDestinationCodesRequestWithDefaults() *PostDestinationCodesRequest`

NewPostDestinationCodesRequestWithDefaults instantiates a new PostDestinationCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationCodes

`func (o *PostDestinationCodesRequest) GetDestinationCodes() []DestinationCodeType`

GetDestinationCodes returns the DestinationCodes field if non-nil, zero value otherwise.

### GetDestinationCodesOk

`func (o *PostDestinationCodesRequest) GetDestinationCodesOk() (*[]DestinationCodeType, bool)`

GetDestinationCodesOk returns a tuple with the DestinationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationCodes

`func (o *PostDestinationCodesRequest) SetDestinationCodes(v []DestinationCodeType)`

SetDestinationCodes sets DestinationCodes field to given value.

### HasDestinationCodes

`func (o *PostDestinationCodesRequest) HasDestinationCodes() bool`

HasDestinationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostDestinationCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostDestinationCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostDestinationCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostDestinationCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostDestinationCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostDestinationCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostDestinationCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostDestinationCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


