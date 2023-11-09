# CheckDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckDate** | Pointer to **string** | Indicates the Cheque date. | [optional] 
**CheckDetailsInfo** | Pointer to **string** | Used for Character Strings, length 0 to 32000. | [optional] 
**CheckImageInfo** | Pointer to **string** | Response of guest check Image details in encoded format. | [optional] 
**CheckNumber** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCheckDetails

`func NewCheckDetails() *CheckDetails`

NewCheckDetails instantiates a new CheckDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckDetailsWithDefaults

`func NewCheckDetailsWithDefaults() *CheckDetails`

NewCheckDetailsWithDefaults instantiates a new CheckDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckDate

`func (o *CheckDetails) GetCheckDate() string`

GetCheckDate returns the CheckDate field if non-nil, zero value otherwise.

### GetCheckDateOk

`func (o *CheckDetails) GetCheckDateOk() (*string, bool)`

GetCheckDateOk returns a tuple with the CheckDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckDate

`func (o *CheckDetails) SetCheckDate(v string)`

SetCheckDate sets CheckDate field to given value.

### HasCheckDate

`func (o *CheckDetails) HasCheckDate() bool`

HasCheckDate returns a boolean if a field has been set.

### GetCheckDetailsInfo

`func (o *CheckDetails) GetCheckDetailsInfo() string`

GetCheckDetailsInfo returns the CheckDetailsInfo field if non-nil, zero value otherwise.

### GetCheckDetailsInfoOk

`func (o *CheckDetails) GetCheckDetailsInfoOk() (*string, bool)`

GetCheckDetailsInfoOk returns a tuple with the CheckDetailsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckDetailsInfo

`func (o *CheckDetails) SetCheckDetailsInfo(v string)`

SetCheckDetailsInfo sets CheckDetailsInfo field to given value.

### HasCheckDetailsInfo

`func (o *CheckDetails) HasCheckDetailsInfo() bool`

HasCheckDetailsInfo returns a boolean if a field has been set.

### GetCheckImageInfo

`func (o *CheckDetails) GetCheckImageInfo() string`

GetCheckImageInfo returns the CheckImageInfo field if non-nil, zero value otherwise.

### GetCheckImageInfoOk

`func (o *CheckDetails) GetCheckImageInfoOk() (*string, bool)`

GetCheckImageInfoOk returns a tuple with the CheckImageInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckImageInfo

`func (o *CheckDetails) SetCheckImageInfo(v string)`

SetCheckImageInfo sets CheckImageInfo field to given value.

### HasCheckImageInfo

`func (o *CheckDetails) HasCheckImageInfo() bool`

HasCheckImageInfo returns a boolean if a field has been set.

### GetCheckNumber

`func (o *CheckDetails) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *CheckDetails) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *CheckDetails) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *CheckDetails) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetLinks

`func (o *CheckDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CheckDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CheckDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CheckDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CheckDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CheckDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CheckDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CheckDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


